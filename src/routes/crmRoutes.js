import addNewContact from '../controllers/crmController';
import { getAllContacts, getContactById, updateContact, deleteContact } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request from: ${req.method}`)
        next();
    }, getAllContacts)
        
    .post(addNewContact);

    app.route('/contact/:contactId')

    .get(getContactById)
    .put(updateContact)
    .delete(deleteContact);
}

export default routes;
