<template>
  <div> 
    <div class="register-wrapper"> 
      <div id="register">
        <p class="title">Register</p>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="0"
          class="demo-ruleForm"
        >
        <el-form-item prop="name">
            <el-input v-model="ruleForm.name" auto-complete="off" placeholder="Full Name"></el-input>
          </el-form-item>
            <el-form-item prop="email">
            <el-input v-model="ruleForm.email" auto-complete="off" placeholder="Email Address"></el-input>
          </el-form-item>
          <el-form-item prop="tel">
            <el-input v-model="ruleForm.tel" auto-complete="off" placeholder="Phone Number"></el-input>
          </el-form-item>
          <el-form-item prop="address">
            <el-input v-model="ruleForm.address" auto-complete="off" placeholder="Home Address"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="Password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" v-on:click="submitForm('ruleForm')" style="width:100%;">Register</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
  

</template>
<script> 
export default {
  name: "Register", 
  data() {
    // checking if the user's email input is legal
    let checkEmailResult = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please Enter Your Email Address'))
      } else if (!this.checkEmail(value)) {
        callback(new Error('Please Enter a Correct Email Address'))
      } else {
        callback()
      }
    }
   
    // checking if the user's phone number input is legal
    let checkMobileResult = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please Enter Your Phone Number'))
      } else if (!this.checkMobile(value)) {
        callback(new Error('Please Enter a Correct Phone Number'))
      } else {
        callback()
      }
    }
   
     return {  
      ruleForm: {
        name:"",
        email:"",
        tel:"",
        address:"",
        pass: "",
       
   
      },
      rules: {
        email: [{ validator: checkEmailResult, trigger: 'change' }],
        tel: [{ validator: checkMobileResult, trigger: 'change' }],
      }
    }

  
    
  }, 
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          setTimeout(() => {
            alert("Congrats, You're registered")
          }, 400);
          this.$router.push({
            //redirecting to Profile.vue after clicking register button
        path: "/profile",
        query:{name:this.ruleForm.name}

      });
        } else {
          console.log("Please check the input information");
          return false;
        }
      })
    },
    //using regex to test if the phone number was formatted correctly
    checkMobile(mobile) {
      let regex = /^1\d{10}$/
      return regex.test(mobile);
    },
    //using regex to test if the email address was formatted correctly
    checkEmail(email) {
      let regex =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      return regex.test(email); 
    }
  }
};
</script>

<style scoped>
.loading-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #aedff8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-wrapper img {
  position: absolute;
  z-index: 1;
}
.register-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
#register {
  max-width: 340px;
  margin: 60px auto;
  background: #fff;
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;
  z-index: 9;
}
.title {
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
}
.el-form-item {
  text-align: center;
}

.code >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.code button {
  margin-left: 20px;
  width: 140px;
  text-align: center;
}
.el-button--primary:focus {
  background: #409EFF;
  border-color: #409EFF;
  color: #fff;
}
</style>