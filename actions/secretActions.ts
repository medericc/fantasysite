// Indique que ce fichier contient des actions serveur Next.js
// Ces fonctions ne s'exécuteront que côté serveur
'use server'

// Importation des dépendances nécessaires
import { currentUser } from "@clerk/nextjs/server";
import prisma from '@/lib/db'
import CryptoJS from 'crypto-js'

/**
 * Fonction utilitaire qui chiffre un texte donné
 */
const encryptSecret = (text: string) => {
  return CryptoJS.AES.encrypt(text, process.env.ENCRYPTION_KEY!).toString();
}

/**
 * Fonction utilitaire qui déchiffre un texte chiffré
 */
const decryptSecret = (ciphertext: string) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, process.env.ENCRYPTION_KEY!);
  return bytes.toString(CryptoJS.enc.Utf8);
}

/**
 * Action serveur pour créer ou mettre à jour un secret
 */
export async function createSecret(content: string) {
  try {
    const user = await currentUser();
    if (!user?.id) throw new Error('Not authorized');

    const encryptedContent = encryptSecret(content);

    // Met à jour le champ secret de l'utilisateur
    await prisma.user.update({
      where: { clerk_id: user.id },
      data: { secret: encryptedContent },
    });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}

/**
 * Action serveur pour récupérer le secret d'un utilisateur
 */
export async function getSecret() {
  try {
    const user = await currentUser();
    if (!user?.id) throw new Error('Not authorized');

    const dbUser = await prisma.user.findUnique({
      where: { clerk_id: user.id },
    });

    const decryptedContent = dbUser?.secret ? decryptSecret(dbUser.secret) : '';
    return { success: true, content: decryptedContent };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}

/**
 * Action serveur pour mettre à jour le pseudo de l'utilisateur connecté
 */
export async function updatePseudo(newPseudo: string) {
  try {
    const user = await currentUser();
    if (!user?.id) throw new Error('Not authorized');

    // Vérifie si le pseudo existe déjà
    const existing = await prisma.user.findUnique({
      where: { pseudo: newPseudo },
    });
    if (existing) throw new Error('Ce pseudo est déjà pris');

    await prisma.user.update({
      where: { clerk_id: user.id },
      data: { pseudo: newPseudo },
    });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erreur inconnue",
    };
  }
}

