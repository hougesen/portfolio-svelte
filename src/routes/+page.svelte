<script lang="ts">
    import Contact from "$lib/components/Contact.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import ProjectList from "$lib/components/ProjectList.svelte";
</script>

<svelte:head>
    <title>Mads Hougesen | Software Developer</title>

    <meta name="title" content="Mads Hougesen | Software Developer" />
    <meta
        name="description"
        content="Software developer from Denmark. Lover of all things programming - but always learning new stuff."
    />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://mhouge.dk/" />
    <meta property="og:title" content="Mads Hougesen | Software Developer" />
    <meta
        property="og:description"
        content="Software developer from Denmark. Lover of all things programming - but always learning new stuff."
    />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://mhouge.dk/" />
    <meta property="twitter:title" content="Mads Hougesen | Software Developer" />
    <meta
        property="twitter:description"
        content="Software developer from Denmark. Lover of all things programming - but always learning new stuff."
    />

    <meta property="og:image" content="https://mhouge.dk/mads-hougesen-image.png" />
    <meta property="twitter:image" content="https://mhouge.dk/mads-hougesen-image.png" />

    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "UA-45233401-2");
    </script>
</svelte:head>

<Hero />

<ProjectList />

<Contact />
