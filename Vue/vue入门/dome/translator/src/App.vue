<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单 / 易用 / 便捷</h5>
    <translateForm @formSubmit="translateTest"/>
    <translate-output :text="TranslatedText"></translate-output>
  </div>
</template>

<script>
import TranslateForm from './components/TranslateForm.vue'
import TranslateOutput from './components/TranslateOutput.vue'

export default {
  name: 'App',
  data() {
    return {
      TranslatedText: ''
    }
  },
  components: {
    TranslateForm,
    TranslateOutput
  },
  methods: {
    translateTest(text, language) {
      // console.log(text);
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200508T125412Z.64f0381e6967896b.9b43c5aceaed00533cc727cd37b78bde179a9aa3&lang='+ language +'&text=' + text)
      .then((response) => {
        // console.log(response);
        this.TranslatedText = response.body.text[0];
      })
    }
  }
}
</script>

<style>
#app {
  padding: 30px auto 10px;
  text-align: center;
}

</style>
