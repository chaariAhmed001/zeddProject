<template>
    <div class="contactus-container">
        <div class="contactus-content">
            <div class="contactus-img">
                <img src="../assets/svgs/svg2.svg" alt="img"/>
            </div>
            <div class="contactus-rigth text-primary_color__darkBlue">
                <h2 >Need Help Making Coffee? Contact Us</h2>
                <form class="contactus-form" :onSubmit="handleSubmit">
                    <div class="contactus-input">
                        <label for="name">Name</label>
                        <InputText id="name" type="text" name="name" v-model="formData.name" aria-describedby="username-help" size="large" class="bg-secondary_color__lightPinky" />
                        <span v-for="error in v$.name.$errors" :key="error.$uid">{{ error.$message }}</span>
                    </div>
                    <div class="contactus-input">
                        <label for="email">Email</label>
                        <InputText id="email" name="email" type="email" v-model="formData.email" aria-describedby="username-help" size="large" class="bg-secondary_color__lightPinky" />
                        <span v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
                    </div>
                    <div class="contactus-input">
                        <label for="password">Password</label>
                        <InputText id="password" name="password" type="password" v-model="formData.password" aria-describedby="username-help" size="large" class="bg-secondary_color__lightPinky" />
                        <span v-for="error in v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
                    </div>
                    <div class="contactus-input">
                        <label for="message">Message</label>
                        <Textarea type="text" name="message" v-model="formData.message" autoResize rows="5" cols="30" class="bg-secondary_color__lightPinky" />
                        <span v-for="error in v$.message.$errors" :key="error.$uid">{{ error.$message }}</span>

                    </div>
                    <div class="btn-container">
                        <Button
                            type="submit"
                            class="btn bg-primary_color__darkBlue bg-hover-primary_color__darkBlue"
                            label="Send"
                            style="width: 200px; "
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators';

const formData = reactive({
    name: '',
    email: '',
    password: '',
    message: '',
});

const customPasswordValidator = (value) => {
    const uppercaseCount = (value.match(/[A-Z]/g) || []).length;
    const numberCount = (value.match(/[0-9]/g) || []).length;
    return uppercaseCount >= 5 && numberCount >= 4;
};

const validations = computed(() => {
    return {
        name: { required: helpers.withMessage('This field cannot be empty', required) },
        email: { required, email },
        password: {
            required,
            minLength: minLength(10),
            custom: helpers.withMessage('Password must contain at least 5 uppercase characters and 4 number.', customPasswordValidator),
        },
        message: { required },
    };
});

const v$ = useVuelidate(validations, formData);

const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await v$.value.$validate();
    if (result) {
        console.log(formData);
    } else {
        console.log("error, form not valid");
    }
};
</script>