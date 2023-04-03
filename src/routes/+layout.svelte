<script lang="ts">
    import type { PageLoad } from "./$types";
    export const prerender = true;

    export const load = (async ({ fetch }) => {
        const res = await fetch("/my-server-route.json");
        return await res.json();
    }) satisfies PageLoad;

    import "./styles.css";
    import Navigation from "../lib/components/Navigation.svelte";
</script>

<div class="container dark:bg-black dark:text-white text-black mx-auto px-12">
    <Navigation />

    <main>
        <slot />
    </main>
</div>
