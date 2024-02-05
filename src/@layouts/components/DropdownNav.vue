<script setup>
import { ref } from 'vue';


const isDropdownExpanded = ref(false);

const toggleDropdown = () => {
  isDropdownExpanded.value = !isDropdownExpanded.value;
};

const props = defineProps(['title', 'icon']);
</script>


<template>
  <div class="vertical-nav-link-dropdown nav-link">
    <div class="vertical-nav-link" @click="toggleDropdown">
      <VIcon :icon="icon" />
      <span class="ms-2">{{ title }}</span>
      <span class="dropdown-arrow" :class="{ 'rotate-180': isDropdownExpanded }">
        <VIcon icon="mdi-chevron-down" />
      </span>
    </div>

    <!-- Dropdown content -->
    <div class="dropdown-content" :class="{ expanded: isDropdownExpanded }">
      <slot></slot>
    </div>
  </div>
</template>


<style lang="scss" scoped>

/* Style for the dropdown container */
.vertical-nav-link-dropdown {
  position: relative;
      
}
.vertical-nav-link {
  cursor: pointer;
      
}
.vertical-nav-link-dropdown .dropdown-arrow {
      position: absolute;
      top: 26%;
      right: 16px;
      transform: translateY(-50%);
      }
      
      /* Style for the dropdown content */
      .vertical-nav-link-dropdown .dropdown-content {
        display: none;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      margin-top: 8px;
      min-width: 160px; /* Set a minimum width for the dropdown content */
    }
      .expanded {
        display: block !important;
      }

    /* Style to show the dropdown content when expanded */

    /* Style for each dropdown item */
    .vertical-nav-link-dropdown .dropdown-item {
      padding: 8px 16px;
      color: #333;
      text-decoration: none;
      display: block;
      transition: background-color 0.3s;
      .vertical-nav-link-dropdown .dropdown-item:hover {
        background-color: #f5f5f5;
      }
    }

    /* Hover effect for dropdown items */

    /* Rotate arrow when expanded */
    .vertical-nav-link-dropdown .rotate-180 {
      transform: translateY(-50%) rotate(180deg);
    }
    .nav-link {
      overflow: visible !important;
    }

/* Style for the dropdown arrow icon */


</style>
