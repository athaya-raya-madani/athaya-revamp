<template>
  <div class="h-100 d-flex flex-wrap align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      Made With
      <VIcon
        icon="bx-heart"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
    </span>
    <span class="d-flex align-center">
      Distributed By <a
        href="https://www.linkedin.com/in/pugud-pambudi-b30171231/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >IT</a>
    </span>
  </div>
</template>
