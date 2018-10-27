<template>
	<div class="view-contact flex-container col justify-center align-center">
		<contact-widget></contact-widget>
	</div>
</template>

<script>
import contactWidget from "../components/contactWidget";

export default {
  name: "contact",
  components: {
    contactWidget
  }
};
</script>

<style>
@import "../styles/helpers.scss";
</style>
