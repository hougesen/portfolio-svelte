<script lang="ts">
    import MadsHougesenPng from "$lib/images/mads-hougesen-image.png";
    import MadsHougesenWebp from "$lib/images/mads-hougesen-image.webp";
    import SocialIcons from "./SocialIcons.svelte";

    function switchHighlightColor(): void {
        const min = 70;
        const max = 360;
        const color = `hsl(${Math.floor(Math.random() * (max - min) + min)}, 80%, 50%)`;

        document?.documentElement?.style?.setProperty("--highlight-color", color);
    }
</script>

<section id="hero" class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="my-auto flex flex-col lowercase">
        <h1 class="text-5xl lg:text-6xl font-bold lowercase mb-4">
            <span on:mouseover={switchHighlightColor} on:focus={switchHighlightColor} class="highlight"> Hi, </span>
            I'm Mads
        </h1>

        <p class="text-xl mb-4">
            I am a software developer from Denmark. Lover of all things programming. Currently into Rust, Python and
            TypeScript.
        </p>

        <p class="text-xl mb-2">
            I work @
            <a
                href="https://cavea.io?utm_source=mhouge.dk"
                rel="noreferrer noopener"
                target="_blank"
                class="highlight--hover underline"
            >
                cavea.io
            </a>
            where I spend most of my time building tools for live streamers. Some projects I've worked on include:
        </p>

        <ul class="text-xl list-disc ml-4 mb-4">
            <li>
                A tool for automatically
                <a
                    href="https://capturelab.gg?utm_source=mhouge.dk"
                    rel="noreferrer noopener"
                    target="_blank"
                    class="highlight--hover underline"
                >
                    capturing highlights in livestreams
                </a>
            </li>

            <li>
                A platform for running
                <a
                    href="https://adlab.gg?utm_source=mhouge.dk"
                    rel="noreferrer noopener"
                    target="_blank"
                    class="highlight--hover underline"
                >
                    influencer campaigns
                </a>
                on Twitch
            </li>

            <li>Dozens of systems for tracking social media performance</li>
        </ul>
        <SocialIcons />
    </div>

    <picture class="max-w-full lg:w-fit order-first lg:order-1 mr-auto lg:mr-0 pl-16 my-auto ml-auto lg:text-right">
        <source srcset={MadsHougesenWebp} type="image/webp" />

        <source srcset={MadsHougesenPng} type="image/png" />

        <img src={MadsHougesenPng} alt="Mads Hougesen" class="mr-auto lg:mr-0 ml-auto lg:text-right" />
    </picture>
</section>
