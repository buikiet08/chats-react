import { signInWithPopup } from 'firebase/auth';
import { Col, Image, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { auth, db, provider, providerGg } from '@/firebase/config';
import { collection, addDoc } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { loginThunkAction } from '@/store/authReducer';
import { Link, useNavigate } from 'react-router-dom';
import Field from '@/components/Field';
import Button from '@/components/Button';
import { useForm } from '@/hooks/useForm';
import { regexp, required } from '@/utils/validate';
import { CaretRightOutlined } from '@ant-design/icons';
import { handleError } from '@/utils/handleError';


function Login() {
    const dispatch = useDispatch()
    const form = useForm({
        username: [required(), regexp('email')],
        password: [required()]
    })
    const onsubmit = async () => {
        try {
            if (form.validate()) {
                console.log(form.values())
            }
        } catch (error) {
            handleError(error)
        }
    }
    // const handleFbLogin = async () => {
    //     signInWithPopup(auth, provider)
    //         .then(async (result) => {
    //             const res = result
    //             if (result?.user) {
    //                 dispatch(loginThunkAction(result?.user))
    //                 await addDoc(collection(db, "users"), {
    //                     displayName: res?.displayName,
    //                     email: res?.email,
    //                     photoURL: res?.photoURL,
    //                     uid: res?.displayName,
    //                     providerId: res?.providerData[0].providerId
    //                 });
    //                 navigate('/')
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });
    // }
    const handleGgLogin =  () => {
        signInWithPopup(auth, providerGg)
            .then(async (result) => {
                console.log(result.user)
                if (result?.user) {
                    await dispatch(loginThunkAction(result?.user)).unwrap()
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }
    useEffect(() => {
        VanillaTilt.init(document.querySelector(".item-bg-home"), {
            max: 25,
            speed: 1000
        });

        //It also supports NodeList
        VanillaTilt.init(document.querySelectorAll(".item-bg-home"));
    }, [])

    return (
        <main className="homepage !pt-0" id="main">
            <div className="auth !max-w-full">
                <div className="wrap !max-w-full !bg-white !p-0">
                    <Row justify='center' style={{ height: '100vh' }}>
                        <Col span={window.innerWidth < 1024 ? 24 : 12} className='py-[50px] px-[70px] lg:pr-[90px]'>
                            <img className='w-[50px] h-[50px] m-0' src='/img/logo.png' />

                            <Typography className='mt-10 mb-8'>
                                <Typography.Title className='flex items-center justify-start !font-extrabold' level={1}>Hey, hello <img className='w-[40px] h-[40px] max-w-[40px] m-0' src='/img/hello.png' /></Typography.Title>
                                <Typography.Text className='text-[#85849d] text-xl'>Enter the infomation you entered while</Typography.Text>
                            </Typography>

                            <div className="ct_login">
                                <div className='mb-[20px]'>
                                    <Field label='Email' type='text' {...form.register('username')} />
                                </div>
                                <div className='mb-[20px]'>
                                    <Field label="Password" type='password' {...form.register('password')} />
                                </div>
                                <div className="remember">
                                    <label className="btn-remember">
                                        <div>
                                            <input type="checkbox" />
                                        </div>
                                        <p className='font-xl'>Remember me</p>
                                    </label>
                                    <Link className="font-bold whitespace-nowrap bg-gradient-to-r from-[#5dadfb] to-[#6c64fc] text-transparent bg-clip-text text-base">Forgot password?</Link>
                                </div>
                                <Button style={{ marginBottom: 20, width: '100%' }} onClick={onsubmit}>Login</Button>
                            </div>

                            <div className='or'>or</div>

                            <Button onClick={handleGgLogin} style={{ marginBottom: 5, width: '100%', background: 'transparent', color: '#000', border: '1px solid #ebebf5' }}>
                                <img className='w-[30px] h-[30px] mr-4 m-0' src='/img/google.png' />Sign In with Google
                            </Button>
                        </Col>
                        {
                            window.innerWidth >= 1024 &&
                            <Col span={12} className='p-[20px] bg-gradient-to-bl to-[#d8d1f8] from-[#acc3f7] flex justify-center items-center'>
                                <div className='p-[50px] bg-[#ffffff38] text-white w-full max-w-[500px] pr-[80px] item-bg-home'>
                                    <div className='text-[58px] text-white font-bold whitespace-pre-wrap'>
                                        <CaretRightOutlined /> Digital glatform for distance
                                    </div>
                                    <div className='text-[58px] font-bold whitespace-pre-wrap text-[#16154e] mb-6'>learning.</div>

                                    <p>You will never know everything.</p>
                                    <p>But will know more.</p>
                                </div>
                            </Col>
                        }
                    </Row>
                </div>
            </div>
        </main>
    )
}

export default Login