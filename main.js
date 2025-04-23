
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('registrationForm');
            const successMessage = document.getElementById('successMessage');
            
            // Toggle password visibility
            const togglePassword = document.getElementById('togglePassword');
            const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirmPassword');
            
            togglePassword.addEventListener('click', function() {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    togglePassword.textContent = 'Hide';
                } else {
                    passwordInput.type = 'password';
                    togglePassword.textContent = 'Show';
                }
            });
            
            toggleConfirmPassword.addEventListener('click', function() {
                if (confirmPasswordInput.type === 'password') {
                    confirmPasswordInput.type = 'text';
                    toggleConfirmPassword.textContent = 'Hide';
                } else {
                    confirmPasswordInput.type = 'password';
                    toggleConfirmPassword.textContent = 'Show';
                }
            });
            
            // Form validation
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;
                
                // Validate full name
                const fullName = document.getElementById('fullName').value.trim();
                const nameGroup = document.getElementById('nameGroup');
                if (fullName === '') {
                    nameGroup.classList.add('error');
                    isValid = false;
                } else {
                    nameGroup.classList.remove('error');
                }
                
                // Validate email
                const email = document.getElementById('email').value.trim();
                const emailGroup = document.getElementById('emailGroup');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    emailGroup.classList.add('error');
                    isValid = false;
                } else {
                    emailGroup.classList.remove('error');
                }
                
                // Validate phone number
                const phone = document.getElementById('phone').value.trim();
                const phoneGroup = document.getElementById('phoneGroup');
                const phoneRegex = /^\d{10}$/;
                if (!phoneRegex.test(phone)) {
                    phoneGroup.classList.add('error');
                    isValid = false;
                } else {
                    phoneGroup.classList.remove('error');
                }
                
                // Validate password
                const password = document.getElementById('password').value;
                const passwordGroup = document.getElementById('passwordGroup');
                if (password.length < 6) {
                    passwordGroup.classList.add('error');
                    isValid = false;
                } else {
                    passwordGroup.classList.remove('error');
                }
                
                // Validate confirm password
                const confirmPassword = document.getElementById('confirmPassword').value;
                const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
                if (confirmPassword !== password) {
                    confirmPasswordGroup.classList.add('error');
                    isValid = false;
                } else {
                    confirmPasswordGroup.classList.remove('error');
                }
                
                // If all validations pass
                if (isValid) {
                    form.style.display = 'none';
                    successMessage.style.display = 'block';
                    
                    // Reset form after 3 seconds
                    setTimeout(() => {
                        form.style.display = 'block';
                        successMessage.style.display = 'none';
                        form.reset();
                    }, 3000);
                }
            });
            
            // Real-time validation on blur
            document.getElementById('fullName').addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    document.getElementById('nameGroup').classList.add('error');
                } else {
                    document.getElementById('nameGroup').classList.remove('error');
                }
            });
            
            document.getElementById('email').addEventListener('blur', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.value.trim())) {
                    document.getElementById('emailGroup').classList.add('error');
                } else {
                    document.getElementById('emailGroup').classList.remove('error');
                }
            });
            
            document.getElementById('phone').addEventListener('blur', function() {
                const phoneRegex = /^\d{10}$/;
                if (!phoneRegex.test(this.value.trim())) {
                    document.getElementById('phoneGroup').classList.add('error');
                } else {
                    document.getElementById('phoneGroup').classList.remove('error');
                }
            });
            
            document.getElementById('password').addEventListener('blur', function() {
                if (this.value.length < 6) {
                    document.getElementById('passwordGroup').classList.add('error');
                    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
                    if (document.getElementById('confirmPassword').value !== '') {
                        document.getElementById('confirmPasswordGroup').classList.add('error');
                    }
                } else {
                    document.getElementById('passwordGroup').classList.remove('error');
                    if (document.getElementById('confirmPassword').value === this.value) {
                        document.getElementById('confirmPasswordGroup').classList.remove('error');
                    }
                }
            });
            
            document.getElementById('confirmPassword').addEventListener('blur', function() {
                const password = document.getElementById('password').value;
                if (this.value !== password) {
                    document.getElementById('confirmPasswordGroup').classList.add('error');
                } else {
                    document.getElementById('confirmPasswordGroup').classList.remove('error');
                }
            });
        });
    