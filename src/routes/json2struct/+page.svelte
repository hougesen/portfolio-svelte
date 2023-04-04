<script lang="ts">
    import json2struct from "json2struct";

    $: input = "";
    $: convertedStruct = "";
    $: selectedLanguage = "typescript";

    // TODO: actually validate shit
    function convert() {
        try {
            convertedStruct = json2struct(selectedLanguage, input);
        } catch {
            convertedStruct = "ERROR: Invalid JSON";
        }
    }
</script>

<h1 class="text-4xl lg:text-5xl font-bold mb-4">json2struct</h1>
<h2 class="text-2xl">Easily translate JSON into type declarations.</h2>

<div class="mt-4 flex flex-col gap-4 h-full">
    <div class="flex gap-4">
        <select bind:value={selectedLanguage} class="text-black ml-auto px-3 p-2 rounded">
            <option value="typescript"> TypeScript </option>
            <option value="python"> Python </option>
            <option value="julia"> Julia </option>
            <option value="rust"> Rust </option>
        </select>

        <button on:click={convert} type="button" class="rounded border-2 border-white p-2 px-4"> Convert </button>
    </div>

    <div class="pb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <textarea
            bind:value={input}
            class="w-full h-full text-white bg-black dark:text-black dark:bg-white min-h-[50vh] rounded"
        />

        <pre class="w-full h-full text-white bg-black dark:text-black dark:bg-white min-h-[50vh] rounded">
{convertedStruct}
        </pre>
    </div>
</div>
