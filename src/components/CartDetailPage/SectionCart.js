import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Modal, ModalBody, ModalHeader} from "reactstrap"
import Swal from 'sweetalert2';

import {formatCurrency, getPercentDiscount} from "../../javascript/utils/Utils_Tuyen";
import {getListDiscountCode} from "../../javascript/api/Api_Tuyen"

import {removeItemFromCart, updateDiscountCode, updateDiscountPercent} from "../../redux/redux_tuyen/Action_Tuyen";
import '../../css/modal.css'

function SectionCart() {

    const cart = useSelector(state => state.cartReducer.cart);

    /**
     useSelector là một hook của React Redux,
     cho phép bạn lấy ra các giá trị từ Redux store.
     Bằng cách truyền một hàm selector,
     bạn có thể lựa chọn các phần của state mà bạn muốn truy xuất từ store.
     */

    let content;
    if (cart.length > 0) {
        content = (<div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th className="shoping__product">Mã nguồn</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {cart.map((value, index) => (
                                <ItemCart key={index} product={value}/>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__btns">
                        <Link to="/" className="primary-btn cart-btn">Tiếp tục mua code</Link>
                        <Link to="/" className="primary-btn cart-btn cart-btn-right">Tiếp tục mua code</Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <FormInputDiscount/>
                </div>
                <div className="col-lg-6">
                    <TotalCart/>
                </div>
            </div>
        </div>)
    } else {
        content = (<div className="container">
                <div className="text-center">
                    <div style={{maxWidth: "300px", margin: "0 auto"}}>
                        <img style={{width: "100%", height: "auto"}} src={require('../../img/cart/empty_cart.png')}
                             alt="No data"/>
                    </div>
                    <p className="mt-3">Không có sản phẩm nào trong giỏ hàng</p>
                </div>
            </div>
        )
    }
    return (
        <section className="shoping-cart spad">{content}</section>
    )
} // => đây là component cha

function ItemCart({product}) {

    const styleImage = {
        width: '60%',
        height: '60%'
    }

    const dispatch = useDispatch(); // dùng để gửi Action đến Store

    function clickRemoveItemFromCart() {

        console.log("Product remove: ", product);
        dispatch(removeItemFromCart(product)); // xóa sản phẩm khỏi giỏ hàng
        Swal.fire({
            title: '',
            text: 'Sản phẩm đã xóa khỏi giỏ hàng',
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 3000, // Thời gian tự động tắt thông báo sau 3 giây
            timerProgressBar: true // Hiển thị thanh tiến trình đếm ngược
        }).then(() => {

        });
        dispatch(updateDiscountCode('')); // reset lại mã giảm giá
        dispatch(updateDiscountPercent(0)); // reset lại % giảm giá của đơn hàng
    }

    return (
        <tr>
            <td><img src={`${product.img}`} style={styleImage} alt=""/></td>
            <td className="shoping__cart__item">
                <h5>{`${product.name}`}</h5>
            </td>
            <td className="shoping__cart__price">
                {formatCurrency(product.price)}
            </td>
            <td className="shoping__cart__item__close">
                <span onClick={clickRemoveItemFromCart}>Xóa</span>
            </td>
        </tr>
    )
} // => đây là component con

function FormInputDiscount() {

    const dispatch = useDispatch();
    const discountCode = useSelector(state => state.discountCodeReducer.code);

    const clickApplyDiscountCode = async (e) => {
        e.preventDefault();
        try {
            const list_discount_code = await getListDiscountCode(); // lấy danh sách mã giảm giá từ api của server
            const percent = getPercentDiscount(discountCode, list_discount_code);
            console.log(percent);

            dispatch(updateDiscountPercent(percent));  // => dispatch(action) - Gửi action đến Redux store
        } catch (error) {
            console.error('Error fetching discount codes:', error);
        }
    }

    const handleDiscountCodeChange = (e) => {
        dispatch(updateDiscountCode(e.target.value));
    }
    // => cập nhật lại giá trị của discountCode mỗi khi người dùng nhập kí tự

    return (
        <div className="shoping__continue">
            <div className="shoping__discount">
                <h5>Mã giảm giá</h5>
                <form onSubmit={clickApplyDiscountCode}>
                    <input
                        type="text"
                        placeholder="Nhập mã giảm giá"
                        value={discountCode}
                        onChange={handleDiscountCodeChange}
                    />
                    <button type="submit" className="site-btn">Áp dụng</button>
                </form>
            </div>
        </div>
    )
}

function TotalCart() {

    const totalPrice = useSelector(state => state.cartReducer.totalPrice);
    const discount = useSelector(state => state.cartReducer.discount_percent); // phần trăm giảm giá của đơn hàng

    let content;
    if (discount > 0 && discount <= 1) {
        content = (<ul>
            <li>Tổng <span>{formatCurrency(totalPrice)}</span></li>
            <li>Giảm giá <span>{formatCurrency(discount * totalPrice)}</span></li>
            <li>Còn lại <span> {formatCurrency(totalPrice - (discount * totalPrice))}</span></li>
        </ul>);
    } else {
        content = (<ul>
            <li>Tổng <span>{formatCurrency(totalPrice)}</span></li>
        </ul>);
    }

    const [showModal, setShowModal] = useState(false);

    const wallets = [
        {name: 'Momo', link_image: 'https://sharecode.vn/assets/images/vi-momo.png'},
        {name: 'ViettelPay', link_image: 'https://sharecode.vn/assets/images/vi-vietel-pay.png'},
        {name: 'NganLuong', link_image: 'https://sharecode.vn/assets/images/vi-ngan-luong.png'}
    ]
    return (
        <>
            <Modal size='lg' isOpen={showModal} toggle={() => setShowModal(false)}>
                <ModalHeader className="header-modal">
                    <div className="header-content">
                        <div><span>Chọn đơn vị thanh toán</span></div>
                        <div>
                            <button className="custom-close-button" onClick={() => setShowModal(false)}>X</button>
                        </div>
                    </div>
                </ModalHeader>
                <ModalBody className="body-modal">
                    <div className="body-content">
                        {
                            wallets.map((value, index) => (
                                <div className="electronic-wallet">
                                    <img src={value.link_image} alt=""/>
                                </div>
                            ))
                        }
                    </div>
                </ModalBody>
            </Modal>


            <div className="shoping__checkout">
                <h5>Đơn hàng</h5>
                {content}
                <a className="primary-btn" onClick={() => setShowModal(true)}>Tiến hành thanh toán</a>
            </div>
        </>
    )
}

export default SectionCart;