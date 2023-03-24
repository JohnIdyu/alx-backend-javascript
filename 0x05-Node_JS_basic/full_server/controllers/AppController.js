/**
 * Contains the miscellaneous route handlers.
 * @author John Idyu <https://github.com/JohnIdyu>
 */
class AppController {
	  static getHomepage(request, response) {
		      response.status(200).send('Hello Holberton School!');
		    }
}

export default AppController;
module.exports = AppController;
