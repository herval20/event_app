import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';





export const actions = {
     deleteaccount: async ({ locals, cookies }) => {
        if (!locals.user) {
          redirect(302, '/');
        }
    
        let connection = await createConnection();
        await connection.execute(
          'DELETE from users WHERE id = ?',
          [locals.user.id]
        );
    
        // Delete session cookie
        cookies.delete('session', { path: '/' });
    
        // Redirect to home page
        redirect(302, '/');
      }
    
    
    
    };