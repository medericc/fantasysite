import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "URL est requise" },
      { status: 400 }
    );
  }

  try {
    console.log("========== PROXY ==========");
    console.log("URL :", url);

    const response = await fetch(url, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    console.log("STATUS :", response.status);
    console.log(
      "CONTENT TYPE :",
      response.headers.get("content-type")
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Réponse Genius :", errorText);

      return NextResponse.json(
        {
          error: "Échec de la récupération des données",
          status: response.status,
        },
        { status: response.status }
      );
    }

    // On récupère d'abord le texte
    const text = await response.text();

    console.log("TAILLE REPONSE :", text.length);
    console.log("DEBUT REPONSE :", text.substring(0, 500));

    // Puis on parse manuellement
    const data = JSON.parse(text);

    console.log("PBP :", data?.pbp?.length);

    return NextResponse.json(data);

  } catch (error) {
    console.error("Erreur du proxy :", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}