"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaRegPaperPlane } from "react-icons/fa";
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/config/firebase.config';
import { useState } from 'react';
import { FiLoader } from "react-icons/fi";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CiCircleCheck } from "react-icons/ci";
import Box from '@mui/material/Box';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


export default function ReviewClient({ session }) {

    const [sending, setSending] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const author = session.user.name
    const authorImg = session.user.image
    const timestamp = new Date().toLocaleDateString()

    const initVal = {
        review: "",
        experience: "",
    }

    const formValidation = Yup.object({
        review: Yup.string().min(5, "Minimum of 5 characters").required("This is a required field"),
        experience: Yup.string()
    })

    return (
        <main className="min-h-dvh p-3">
            <h1 className='text-center md:text-3xl lg:w-1/2 mx-auto font-semibold my-10'>Kindly leave a review. Also tell us about your trip.</h1>
            <Formik
                initialValues={initVal}
                validationSchema={formValidation}
                onSubmit={ async (values, { resetForm }) => {
                    try {
                        setSending(true)
                        const docRef = await addDoc(collection(db, "travel"), {
                            ...values,
                            author, authorImg, timestamp
                        })
                        handleOpen()
                    } catch (error) {
                        console.error("Error in submission", error)
                        alert("Something went wrong")
                    } finally {
                        setSending(false)
                        resetForm()
                    }
                }}
            >
                <Form className='border border-gray-200 lg:w-1/2 mx-auto p-3 rounded-md shadow-md flex flex-col gap-5'>
                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700' htmlFor="">Review</label>
                        <Field
                            className="w-full outline-none border border-gray-200 px-3 py-2 rounded-md" placeholder="Write a review..."
                            name="review"
                        />
                        <ErrorMessage component={"p"} className='text-xs text-red-600' name='review' />
                    </div>

                    <div className='space-y-1'>
                        <label className='text-xs text-gray-700' htmlFor="">Tour Experience(optional)</label>
                        <Field
                            className="w-full outline-none border border-gray-200 px-3 py-2 rounded-md" placeholder="Tell us about your trip"
                            name="experience"
                        />
                        <ErrorMessage component={"p"} className='text-xs text-red-600' name='experience' />
                    </div>


                    <button disabled={sending} type='submit' className='bg-purple-600 text-white px-6 py-2 rounded-md max-md:w-full w-fit text-xl uppercase'>
                        {
                        sending ? <FiLoader className='animate-spin text-2xl' /> :
                        <span className='flex items-center justify-center gap-2'>
                            Post
                            <FaRegPaperPlane />
                        </span>
                        }
                    </button>
                </Form>
            </Formik>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="flex items-center justify-center gap-5 flex-col">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <CiCircleCheck className='text-7xl text-green-600' />
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Your post was sucessful
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </main>
    )
}