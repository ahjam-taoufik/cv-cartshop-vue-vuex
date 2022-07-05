<template>
    <button>
      <slot/>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}

</style>