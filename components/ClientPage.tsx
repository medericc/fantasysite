"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { updatePseudo } from "../actions/secretActions";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ClientPage({ pseudo }: { pseudo: string | null }) {
  const [open, setOpen] = useState(!pseudo);
  const [input, setInput] = useState("");
  const router = useRouter();

    useEffect(() => {
    if (pseudo) {
      router.replace("/fantasy/dashboard");
    }
  }, [pseudo, router]);
 const handleSubmit = async () => {
  const trimmed = input.trim();
  
  if (trimmed.length < 3) {
    return alert("Pseudo trop court");
  }
  if (trimmed.length > 17) {
    return alert("Pseudo trop long (max 17 caractères)");
  }

  const res = await updatePseudo(trimmed);
  if (res.success) {
    setOpen(false);
    router.push("/fantasy/dashboard"); // 🚀 redirection directe
  } else {
    alert("Erreur : " + res.error);
  }
};

  if (pseudo) return null;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-sm rounded-2xl" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Choisis ton pseudo
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder="ex: JeanBaptiste77"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-center text-lg font-medium rounded-xl"
          />
          <Button
            onClick={handleSubmit}
            className="w-full rounded-xl bg-yellow-600 hover:bg-yellow-700 text-white font-semibold"
          >
            Valider
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
