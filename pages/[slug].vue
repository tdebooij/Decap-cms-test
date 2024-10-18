<template>
  <main v-if="status === 'pending'">Loading...</main>
  <main v-else-if="error">Error: {{ error }}</main>
  <main v-else :data-sb-object-id="page.__id">
    <h1 data-sb-field-path="title">{{ page.title }}</h1>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
let slug = route.params.slug;

if (!slug) {
  slug = [];
} else if (typeof slug === "string") {
  slug = [slug];
}

const {
  error,
  status,
  data: page,
  refresh,
} = await useAsyncData(() =>
  $fetch("/api/page", {
    method: "post",
    body: "/" + slug.join("/"),
  })
);

contentChangeEmitter.on("change", () => {
  console.log(`[...slug] Got a content change! refreshing data`);
  refresh();
});
</script>
