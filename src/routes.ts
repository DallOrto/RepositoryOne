import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

// PROJETO RAFINHA 1ª FASE

import { CreateNetworkController } from "./controllers/CreateNetworkController";
import { CreateSchoolController } from "./controllers/CreateSchoolController";

import { ListNetworksController } from "./controllers/ListNetworksController";
import { ListSchoolsController } from "./controllers/ListSchoolsController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();


// PROJETO RAFINHA 1ª FASE

const createNetworkController = new CreateNetworkController();
const createSchoolController = new CreateSchoolController();

const listNetworksController = new ListNetworksController();
const listSchoolsController = new ListSchoolsController();




router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle); 

// PROJETO RAFINHA 1ª FASE

router.post("/network", createNetworkController.handle);
router.post("/school", createSchoolController.handle);

router.get("/networks", listNetworksController.handle);
router.get("/schools", listSchoolsController.handle);


export { router };



