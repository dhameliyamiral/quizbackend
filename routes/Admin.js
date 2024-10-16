const router = require('express').Router();
const {EditQuestion,DeleteQuestion,Adminreg ,AdminLogin,AddQuestions,AddCourses,GetCourses,GetQuestions,GetRandomQuestions} = require('../controller/Admin')
router.post('/adminreg',Adminreg)
router.put('/EditQuestion/:id',EditQuestion)

router.post('/AdminLogin',AdminLogin)
router.post('/AddQuestions',AddQuestions)
router.post('/AddCourses',AddCourses)
router.get('/GetCourses',GetCourses)
router.get('/GetQuestions',GetQuestions)
router.get('/GetQuestions',GetQuestions)
router.delete('/DeleteQuestion/:id', DeleteQuestion);
router.get('/GetRandomQuestions/:CoursesId',GetRandomQuestions)


module.exports = router