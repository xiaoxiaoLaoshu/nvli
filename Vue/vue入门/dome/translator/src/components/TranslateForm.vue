<template>
  <div class="row align-items-center" id="translate-form">
    <div class="col-md-6 m-auto">
      <form class="well form-inline" id="transForm" @submit="formSubmit">
        <input class="form-control m-2" type="text" placeholder="请输入您要翻译的内容" v-model="textToTranslate" />
        <select class="form-control m-2" v-model="language">
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="ko">Korean</option>
          <option value="ja">Janpenese</option>
        </select>
        <input class="btn btn-primary" type="submit" value="翻译" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "translate-form",
  data() {
    return {
      textToTranslate: "",
      language: ""
    };
  },
  methods: {
    formSubmit(e) {
      // alert(this.textToTranslate);
      // 阻止表单的默认提交刷新事件
      e.preventDefault();
      this.$emit("formSubmit", this.textToTranslate, this.language);
    }
  },
  create() {
    this.language = 'en'
  }
};
</script>

<style>
  #transForm {
    border-radius: 10px;
    border: 1px #ccc solid;
  }
</style>
