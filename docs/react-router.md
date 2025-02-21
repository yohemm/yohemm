# Install

npx create-react-router@latest .

# Configure

## react-router.config.ts
ssr est le server side rendering, si activé, le serveur envoi uniquement la page final, c'est bien pour le seo, mais avec beaucoup de requetes on perd des performences

Si désactivé le mode passe en client side rendering

### prerender

Se sont de page qui sont pré chargé pour le SEO et les robots de scanne(de perfomance ou seo) lorsque le client mode rendering est activé

```ts
export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`

  ssr: false,
  async prerender() {
    return ["/", "/skills", "/projects", "/formations" ]
  } 
} satisfies Config;
```

## app/root.tsx

- Gestion de l'envolope HTML de page
- Page par defaut
- Gestion des pages d'erreurs

## app/routes.tsx

- Gestion du Routing

### Index et route simple
n'oublié pas d'ajouté _route_ au import de la source _react router routes_

ensuite il suffit d'utilisé la fonction rout avec comme premier arguments le chemin web et comme deuxieme l'emplacement du fichier tsx correspondant à la page.

pour ajouté de parametre au chemin il suffit d'ajouté `:nameID` au dernier element du chemin.

```js
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route('skills', "routes/skills.tsx", route('post/:postID', "routes/post.tsx")] satisfies RouteConfig;
``` 

Les routes peuvent détenir d'autres enfants routes en 3éme parametre sous forme de liste

### Layout

il est aussi possible d'ajouté des __Layout__\ s qui sont comme des routes sauf qui ne sont reliér à aucun page, ils perment uniquement l'access à des sous pages.

`layout("dashbord", [route(...), route(...)])`

### Prefix
Les layouts et route peuvent détenir des préfix qui permettent de groupé des pages dans un chemin enfant au layout.
```js
layout("dashbord",[
  ...prefix("exemple1", 
    [route("a", "routes/a"), route("b", "routes/b")]),
  ...prefix("exemple2", 
    [route("c", "routes/c"), route("d", "routes/d")]),
])
```
la page _a_ se situe au chemin : _dashbord/exemple1/a_
la page _b_ se situe au chemin : _dashbord/exemple1/b_
la page _c_ se situe au chemin : _dashbord/exemple __2__/c_


## app/routes/

    Contient les fichiers de chaque page


Les page neccessite d'être exporté via une fonction pour être afficher

Pour l'utilsation de Route, bien qui sois du framework react-route, il faut l'importé depuis __le fichier lui mêmme__ et non depuis le framework

`import type { Route } from "./+types/namefile";`

```js
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div> Hey</div>;
}
```

### Route.LoaderArgs

Permet de récupérer l'argements dans l'url 

exemple avec postID:
```js
export async function clientLoader({ params }: Route.LoaderArgs){
  const postId = params.postID;
}
```

### Route.ComponentProps
Permet de récupérer Le retour des loaders 

exemple:
```js
export default function Post({ loaderData }: Route.ComponentProps){
  return (
    <div>
      Title : {loaderData.title}
    </div>
  )
}
```


### Loader & ClientLoader

Le loader est utile pour envoyé de la data sur rendu côté serveur ou sur le prerendering en client side rendering.

Le clientloader lui est utilisé comme son nom l'indique sur le client mais permet de faire par exemple des appelles API appelé sur le client.

Les loaders permettent de charge de la data pour la page


C'est dans le loader qu'on l'on peut utilisé les arguments pour renvoyé un object (appelle à un API ou BDD, ...)

Exemple avec des parametes:
```js
export async function loader({params}: Route.LoaderArgs) {
    const postID = params.postID
    return { postID }
}


export default function Post({loaderData} : Route.ComponentProps) {
  return <div> <p> Post ID : {LoaderData.postID</p></div>;
}
```

### Action & ClientAction
Les actions permettent d'effectué les évenements de la page comment les envoies de fomulaire ou les buttons

```js
export async function action() {}
```

#