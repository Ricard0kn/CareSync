// Checks what dashboard to display to user

const router = express.Router();

//Create call for the dashboard each get request will use the same middleware that checks useres role
router.get("super-admin/dashboard", (req, res) => {
    
});

router.get("admin/dashboard", (req, res) => {

});


