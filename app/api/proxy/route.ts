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
        Accept: "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0",
        Referer:
          "https://fibalivestats.dcd.shared.geniussports.com/",
      },
    });

    console.log("STATUS :", response.status);
    console.log(
      "CONTENT TYPE :",
      response.headers.get("content-type")
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("ERREUR GENIUS :", errorText);

      return NextResponse.json(
        {
          error: "Genius Sports refuse la requête",
          status: response.status,
          details: errorText.substring(0, 500),
        },
        { status: response.status }
      );
    }

    const text = await response.text();

    console.log("TAILLE :", text.length);
    console.log("DEBUT :", text.substring(0, 500));

    const data = JSON.parse(text);

    console.log("PBP :", data?.pbp?.length);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erreur proxy :", error);

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