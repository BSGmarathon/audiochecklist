<script lang="ts">
import { defineComponent } from 'vue'
import type { ApplicationData, CheckBox } from '@/applicationTypes';

export default defineComponent({
  data (): ApplicationData {
    return {
      checks: [],
    };
  },
  mounted() {
    const items = [
        'Runners + game faders to 0',
        'Disable compressor',
        'Setup gain',
        'Stay hydrated',
        'Final check',
    ];

    for (const item of items) {
      this.checks.push({
        label: item,
        checked: false,
      });
    }
  },
  methods: {
    uncheckAll (): void {
      for (const check of this.checks) {
        check.checked = false;
      }
    },
    checkItem(event: Event, check: CheckBox) {
      event.preventDefault();
      event.stopPropagation();

      event.cancelBubble = true;

      // wait for the browser to do its animations
      // fixes the weird checkbox bug
      requestAnimationFrame(() => {
        check.checked = !check.checked;
      });
    }
  },
});
</script>

<template>
  <header>
    <button type="button" @click="uncheckAll">
      <span>Uncheck all</span>
    </button>
  </header>

  <main>
    <ul>
      <li :class="{
          'checked': check.checked,
        }"  v-for="(check, i) in checks" :key="i" @click.prevent="checkItem($event, check)">
        <input type="checkbox" :id="`checkbox${i}`" :checked="check.checked" readonly>
        <label :for="`checkbox${i}`">{{ check.label }}</label>
      </li>
    </ul>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: #2F3A4F;
  color: white;
}
</style>

<style scoped lang="scss">
button {
  width: 100%;
  font-size: 50px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  * {
    position: relative;
  }
}

main {
  margin-top: 60px;
}

button {
  height: 36px;
  padding: 25px 16px;

  background-color: #272727;
  color: white;
  border: none;
  font-size: 2em;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  display: flex;
  flex: 1 0 auto;
  min-width: 100% !important;

  cursor: pointer;

  align-items: center;
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: .0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: .28s;
  transition-property: box-shadow,transform,opacity;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:before {
    background-color: currentColor;
    border-radius: inherit;
    bottom: 0;
    color: inherit;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity .2s cubic-bezier(.4, 0, .6, 1);
  }

  span {
    align-items: center;
    color: inherit;
    display: flex;
    flex: 1 0 auto;
    justify-content: inherit;
    line-height: normal;
    position: relative;
    transition: inherit;
    transition-property: opacity;
  }
}

input[type="checkbox"] + label {
  cursor: pointer;
  margin-left: 10px;
}

ul {
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px !important;
  list-style-type: none;

  li {
    border: solid 1px #768948;
    overflow: auto;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 4px;
    cursor: pointer;
    transition: background-color ease-in-out 250ms;
    font-size: 1.3em;

    &.checked {
      //color: #ffffff;
      background-color: #06BA63;
    }
  }
}
</style>
