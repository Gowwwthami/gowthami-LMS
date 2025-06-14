import express from 'express';
import { authenticate, authorizeRoles } from '../middlewares/auth';

const router = express.Router();

router.get('/student', authenticate, authorizeRoles('student'), (req, res) => {
  res.json({ message: 'Student Dashboard', data: {/* Add real data */} });
});

router.get('/instructor', authenticate, authorizeRoles('instructor'), (req, res) => {
  res.json({ message: 'Instructor Dashboard', data: {/* Add real data */} });
});

router.get('/admin', authenticate, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Admin Dashboard', data: {/* Add real data */} });
});

export default router;
