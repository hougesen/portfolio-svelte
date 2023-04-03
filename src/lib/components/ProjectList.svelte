<script lang="ts">
    interface Project {
        name: string;
        description: string;
        languages: {
            name: string;
            color: string;
        }[];
        url?: string;
        homepageUrl?: string;
    }

    const projects = <Project[]>[
        {
            name: "Strongr",
            description: "Fitness tracker web app made using Nuxt (TypeScript), Express & MongoDB. ",
            languages: [
                { color: "#41b883", name: "Vue" },
                { color: "#f1e05a", name: "TypeScript" },
            ],
            homepageUrl: "https://stron.gr/",
        },

        {
            name: "Strongr",
            description: "Fitness tracker web app made using Nuxt (TypeScript), Express & MongoDB. ",
            languages: [
                { color: "#41b883", name: "Vue" },
                { color: "#f1e05a", name: "TypeScript" },
            ],
            homepageUrl: "https://stron.gr/",
        },

        {
            name: "Strongr",
            description: "Fitness tracker web app made using Nuxt (TypeScript), Express & MongoDB. ",
            languages: [
                { color: "#41b883", name: "Vue" },
                { color: "#f1e05a", name: "TypeScript" },
            ],
            homepageUrl: "https://stron.gr/",
        },

        {
            name: "Strongr",
            description: "Fitness tracker web app made using Nuxt (TypeScript), Express & MongoDB. ",
            languages: [
                { color: "#41b883", name: "Vue" },
                { color: "#f1e05a", name: "TypeScript" },
            ],
            homepageUrl: "https://stron.gr/",
        },
    ];
</script>

<section id="projects">
    <h2 class="lowercase text-4xl lg:text-5xl font-bold mb-8">projects</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects as project}
            <div class={`w-full bg-[#f7f7f7] p-4 flex flex-col border-2 rounded border-solid min-h-[12rem] project`}>
                <div class={`flex`}>
                    <a href={project?.url ?? project?.homepageUrl} target="_blank" rel="noreferrer noopener">
                        <h2 class={`text-xl font-semibold mb-1 lowercase text-black`}>{project.name}</h2>
                    </a>
                </div>

                <p class={`pb-2 text-black lowercase`}>{project.description}</p>

                <div class={`flex mt-auto`}>
                    {#each project.languages as language}
                        <div class={`text-sm mr-2 rounded-sm px-2 py-1`} style={`background-color: ${language.color}`}>
                            <p style={`color:${language.color}`} class="brightness-50 lowercase">
                                {language.name}
                            </p>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>
