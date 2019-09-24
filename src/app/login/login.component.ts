import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';  

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	RegisterForm: FormGroup;
	LoginForm: FormGroup;
	public email: any;
	public password: any;
	public firstname : any;
	public lastname : any;
	public error_message : any;
	public user_already_exists : Boolean;
	public show_loading_register : Boolean;
	public show_loading_login : Boolean;


	constructor(private fb: FormBuilder,private auth: AuthService,private router: Router) 
	{
		this.createForm();
	}
	public showlogin: Boolean;
	public showregister: Boolean;
	ngOnInit() 
	{
		this.showlogin = true;
		this.showregister = false;
		this.email = '';
		this.password = '';
		this.firstname = '';
		this.lastname = '';
		this.error_message = '';
		this.user_already_exists = false;
		this.show_loading_register = false;
		this.show_loading_login = false

	}

	createForm() 
	{
		this.RegisterForm = this.fb.group({
			email: ['', Validators.required ],
			password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(24)]],
			firstname: ['', Validators.required ],
			secondname: ['', Validators.required ]

		});
		this.LoginForm = this.fb.group({
			email: ['', Validators.required ],
			password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(24)]],


		});
	}


	signInWithGoogle() {
		this.auth.signInWithGoogle()
		.then((res) => { 
			console.log(res)
			this.auth.query_user_email(res.user.email).valueChanges().subscribe((user:any) => {
				console.log(user)
				if (user.length == 0)
				{
					var firstname = res.user.displayName.split(" ")[0]
					var lastname = res.user.displayName.split(" ")[res.user.displayName.split(" ").length - 1]
					let user = {'first_name': firstname, 'last_name': lastname, 'email': res.user.email}
					console.log(user)
					this.auth.adduser(user).then((insert_response: any) => 
					{
						console.log("on success", insert_response.email, user.email)
						this.goTointrests(user)

					}).catch((insertion_error) => {
						console.log("insertion error", insertion_error)
					})
				}
				else 
				{
					this.auth.query_user_email(res.user.email).valueChanges().subscribe((user:any) => {
						if (user[0].interests === undefined)
						{
							this.goTointrests(user[0])
						}
						else{
							this.goToiframewithinterests(res.user.email)
						}

					})
				}

			})

		})
		.catch((err) => console.log(err));
	}



	 encryptstring(email)
	 {
    var encrypted = CryptoJS.AES.encrypt(email, "password").toString();
    console.log("encryoted", encrypted)
 
     // var decrypted = CryptoJS.AES.decrypt(encrypted, "password").toString(CryptoJS.enc.Utf8);
     // console.log("decrypted",decrypted)
  }



	signInWithFacebook() {
		this.auth.signInWithFacebook()
		.then((res) => { 
			console.log(res)

			this.auth.query_user_email(res.user.email).valueChanges().subscribe((user:any) => {
				console.log(user)
				if (user.length == 0)
				{
					var firstname = res.user.displayName.split(" ")[0]
					var lastname = res.user.displayName.split(" ")[res.user.displayName.split(" ").length - 1]
					let user = {'first_name': firstname, 'last_name': lastname, 'email': res.user.email}
					console.log(user)
					this.auth.adduser(user).then((insert_response: any) => 
					{
						console.log("on success", insert_response.email, user.email)
						this.goTointrests(user)

					}).catch((insertion_error) => {
						console.log("insertion error", insertion_error)
					})
				}
				else 
				{
					this.auth.query_user_email(res.user.email).valueChanges().subscribe((user:any) => {
						if (user[0].interests === undefined)
						{
							this.goTointrests(user[0])
						}
						else{
							this.goToiframewithinterests(res.user.email)
						}

					})
				}

			})


		})
		.catch((err) => console.log(err));
	}





	login_with_email_password(email,password)
	{
		this.auth.signInWithEmailPassword(email,password).then((signinresponse) => {
			console.log("signinresponse",signinresponse)
			this.show_loading_login = true
			this.auth.query_user_email(email).valueChanges().subscribe((user:any) => {
				
				if (user[0].interests === undefined)
				{
					this.goTointrests(user[0])
				}
				else{
					this.goToiframewithinterests(email)
				}

			})
		}).catch((signinerror) => {
			console.log(signinerror)
			if (signinerror.message == "The password is invalid or the user does not have a password.")
			{
				alert("Oops, The password is invalid.Please try again with another password.")
			}
			else if ( signinerror.message == "There is no user record corresponding to this identifier. The user may have been deleted.")
			{
				alert("Oops, This user doesn not exist. Please register as an user. ")
			}
		})
	}


	goTointrests(user) 
	{
		this.router.navigate(['/interests_new', user]);
	}

	goToiframewithinterests(email) {
		
		this.router.navigate(['/iframe_with_interests', {'identifier':email}]);
	}
	register_with_email_password(firstname, lastname, email,password)
	{
		this.email = email;
		this.password = password
		this.firstname = firstname
		this.lastname = lastname
		this.show_loading_register =  true;
		this.auth.create_user_with_email_password(email,password,firstname,lastname).then((response) => { 
			let user = {'first_name': firstname, 'last_name': lastname, 'email': email}
			this.auth.adduser(user).then((insert_response: any) => 
			{
				console.log("on success", insert_response.email, user.email)
				this.goTointrests(user)

			}).catch((insertion_error) => {
				console.log("insertion error", insertion_error)
			})
		})
		.catch((err) => {
			if (err.code == "auth/email-already-in-use")
			{
				this.error_message = "Oops, this Email is already in use."
				this.user_already_exists = true;
			}
		});

	}


	onloginclick()
	{
		this.showlogin = true;
		this.showregister = false;
	}
	onregisterclick()
	{
		this.showregister = true;
		this.showlogin = false;
	}

}
