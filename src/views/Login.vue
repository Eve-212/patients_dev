<template>
  <div class="login">
    <h2 class="h2">Login Page</h2>
    <form>
      <fieldset label="User Name" label-for="username">
        <input id="username" type="text" name="username" v-model="input.username" placeholder="Please enter user name">
        </input>
      </fieldset>
      <fieldset label="Password" label-for="password">
        <input id="password" type="password" name="password" v-model="input.password" placeholder="Please enter password">
        </input>
      </fieldset>
      <button class="btn btn-block btn-info" type="button" v-on:click="login()">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: {
        id: '',
        username: '萬小芳',
        password: '11111'
      },
      mockAccount: {
        id: '456',
        username: '萬小芳',
        password: '11111'
      }
    }
  },
  methods: {
    login() {
      if (this.input.username != '' && this.input.password != '') {
        if (
          this.input.username == this.mockAccount.username &&
          this.input.password == this.mockAccount.password
        ) {
          this.$emit('authenticated', {
            status: true,
            user: this.mockAccount.username
          })
          this.$router.replace({
            name: 'ptlists'
          })
        } else {
          console.log('The username and / or password is incorrect')
        }
      } else {
        console.log('A username and password must be present')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/global.scss';

.login {
  margin: 130px auto 0 auto;
  border: 1px solid #ccc;
  padding: 30px;
  width: 450px;
  @media screen and (max-width: $break-medium) {
    width: px-to-vw(550, 800);
  }
  @media screen and (max-width: $break-small) {
    width: px-to-vw(400, 450);
  }
  h2 {
    border-left: 5px solid $blue;
    padding: 15px 0 15px 30px;
    margin-left: -30px;
    margin-bottom: 30px;
    @media screen and (max-width: $break-small) {
      margin-bottom: 10px;
    }
  }
  input {
    width: 100%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin: 10px 0;
    padding: 5px 0;
  }
  button {
    color: #fff;
    height: 40px;
    margin: 20px 0;
  }
}
</style>
