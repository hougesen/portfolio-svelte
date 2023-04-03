<script>
    import "./styles.css";
    import Navigation from "../lib/components/Navigation.svelte";
</script>

<div class="container dark:bg-black dark:text-white text-black mx-auto px-12">
    <Navigation />

    <main>
        <slot />
    </main>
</div>
