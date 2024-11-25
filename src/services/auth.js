import { supabase } from '../librairies/supabaseClient.js'

async function signin(email, passwd) {
      console.log("signin with", email, passwd)
      const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password: passwd,
      });
      console.log("service.js : signin result", data)

      if (error) {
            console.error('service.js : Erreur lors de la connexion:', error.message);
            return {
                  data: data,
                  status: 0,
                  error: error.message
            };
      }
      return {
            data: data,
            status: 1,
            error: error
      };
}
async function signup(email, passwd, data_ = {}) {
      console.log("signup with", email, passwd)
      const { data, error } = await supabase.auth.signUp({
            email,
            password: passwd,
            options: {
                  data: {
                        // first_name: 'John',
                        // age: 27,
                  }
            }
      });
      console.log("service.js :  SIGNUP result is", data)
      if (error) {
            console.error('service.js : Erreur lors de la connexion:', error.message);
            return {
                  data: data,
                  status: 0,
                  error: error.message
            };
      }
      return {
            data: data,
            status: 1,
            error: error
      };
}
async function signout() {
      const { data, error } = await supabase.auth.signOut();
      if (error) {
            console.error('service.js : Erreur lors de la connexion:', error.message);
            return {
                  data: data,
                  status: 0,
                  error: error
            };
      }

      return {
            data: data,
            status: 1,
            error: error
      };
}
async function currentUser() {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
            console.error('service.js : Erreur lors de la connexion:', error.message);
            return {
                  data: null,
                  status: 0,
                  error: error
            };
      }
      console.log("service.js : CURENT USER IS ", data.session)
      return {
            data: data.session,
            status: 1,
            error: error
      };
}
async function verifyEmailOtp(email,token){
      console.log(email,token)
      const {data,error} = await supabase.auth.verifyOtp({
            email,
                  token: token,
                  type: 'email',
      })
      console.log("service.js :  verify opt result is", data)
      if (error) {
            console.error('service.js : Erreur lors de la connexion:', error.message);
            return {
                  data: data,
                  status: 0,
                  error: error.message
            };
      }
      return {
            data: data.session,
            status: 1,
            error: error
      };
}

export { signin, signup, signout, currentUser, verifyEmailOtp }