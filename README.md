# Mon Portfolio Professionnel

Bienvenue sur le code source de mon portfolio interactif. 
Ce projet a pour double objectif de :
1. **Présenter mon parcours et mes réalisations** de manière moderne et interactive, grâce à une interface inspirée de macOS.
2. **Démontrer ma maîtrise des bonnes pratiques de développement et de la gestion de projet Agile**.

## 🛠️ Stack Technique

- **Frontend** : [Astro](https://astro.build/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Architecture** : Modulaire, centré autour d'une configuration découplée de la vue (data driven).
- **TypeScript** : Typage fort garantissant la pérennité du code.
- **Hébergement & BDD** : [Vercel](https://vercel.com/) / [Supabase](https://supabase.com/)

## 📊 Gestion de Projet (Kanban / Agile)

Ce dépôt démontre concrètement ma façon de gérer un projet technique :
- **Transparence** : Utilisation d'un [GitHub Project](https://github.com/users/maximeKets/projects/8) pour le suivi des tâches (Kanban).
- **Structuration** : Découpage en *Milestones* (jalons) et *Issues* qualifiées avec des étiquettes (Labels).
- **Git Flow** : Les développements sont réalisés via des branches dédiées et fusionnés par le biais de *Pull Requests*.

*(Recruteurs : N'hésitez pas à consulter l'onglet `Projects`, `Issues` et `Pull Requests` de ce dépôt pour constater mon approche méthodique du développement logiciel).*

## 🌍 Internationalisation (i18n)

Ce projet intègre un système de traduction sur-mesure pour passer du Français (FR) à l'Anglais (EN) de manière instantanée, sans rechargement de page.

L'état de la langue est géré globalement via `nanostores` et est persistant gràce au `localStorage`.
Pour traduire un composant React (`.tsx`), un Hook personnalisé simplifié a été créé :

```tsx
import { useI18n } from '../../store/i18n';

export default function MonComposant() {
  const t = useI18n(); // S'abonne automatiquement aux changements de langue

  return <h1>{t('ma_cle_de_traduction')}</h1>;
}
```
*Toutes les clés de traduction se trouvent dans le dictionnaire `src/store/i18n.ts`.*

## 🚀 Installation Locale

Si vous souhaitez faire tourner ce projet en local pour tester le code :

1. Cloner le dépôt :
```bash
git clone https://github.com/maximeKets/portfolio_astro
cd portfolio_astro
```

2. Installer les dépendances :
```bash
npm install
```

3. Configurer les variables d'environnement :
Copiez le fichier de configuration exemple pour créer votre propre fichier `.env` à la racine du projet :
```bash
cp .env.example .env
```
Ouvrez ensuite ce fichier `.env` et complétez les variables avec vos propres clés. Voici les services utilisés :
- **[OpenAI (Cloud IA)](https://platform.openai.com/home)** *(Requis pour le Chatbot)* : Générez une clé API pour activer l'assistant IA intégré au terminal.
- **[Supabase](https://supabase.com/)** *(Requis)* : Créez un projet pour obtenir votre `SUPABASE_URL` et `SUPABASE_ANON_KEY` pour la base de données Backend.
- **[GitHub Tokens](https://github.com/settings/tokens)** *(Optionnel)* : Générez un *Personal Access Token* pour autoriser l'application à lister vos dépôts GitHub.
- **[Pushover](https://pushover.net/)** *(Optionnel)* : Créez un compte et configurez une application pour obtenir votre `PUSHOVER_USER` et `PUSHOVER_TOKEN` afin de recevoir des alertes ou notifications sur vos appareils.
- **[Vercel Analytics](https://vercel.com/docs/analytics)** *(Optionnel)* : Utilisé pour recueillir des statistiques sur les visiteurs du site.

4. Lancer le serveur de développement :
```bash
npm run dev
```

L'application sera disponible sur `http://localhost:4321`.

---
*Ce portfolio est basé sur un template initialement créé par Johnny Culbreth et aabdoo23, que j'ai adapté et architecturé selon mes besoins.*
