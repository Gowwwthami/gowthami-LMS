import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true }
});

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  questions: [questionSchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export const Quiz = mongoose.model('Quiz', quizSchema);
