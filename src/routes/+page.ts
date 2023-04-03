// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import type { PageLoad } from "./$types";
import type { Project } from "../types";

export const load = (async () => {
    const projects: Project[] = await fetch(
        "https://8frutdm9cf.execute-api.eu-central-1.amazonaws.com/default/fetchPinnedRepositories"
    )
        .then((s) => s.json())
        .catch(() => []);

    return {
        projects,
    };
}) satisfies PageLoad;
