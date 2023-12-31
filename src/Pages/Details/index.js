import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { GetDetailsProduct } from "../../Store/Actions/products"
import './detailsStyles.css'

const DetailsProduct = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLogin } = useSelector((s) => s.auth)
  const { data } = useSelector((s) => s.details)

  useEffect(() => {
    dispatch(GetDetailsProduct(location.state.id))
    if (isLogin !== true) {
      navigate('/login');
    }
  }, [dispatch, isLogin, location.state.id, navigate])

  return (
    <>
      <div className="wrapper-details">
        <div className="wrapper-left">
          <img src={data?.images} alt={data?.title} className='image-product' />
          <div className="text-price">${data?.price}</div>
        </div>
        <div className="wrapper-right">
          <h1>{data?.title}</h1>
          <div className="wrapper-desc">
            <div className="text-label">Description</div>
            <div className="text-details">{data?.description}</div>
          </div>
          <div className="wrapper-cate">
            <div className="text-label">Category</div>
            <div className="text-details">{data?.category?.name}</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DetailsProduct