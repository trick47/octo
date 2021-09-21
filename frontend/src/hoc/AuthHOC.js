import { useSelector } from "react-redux"

export const withAuth = (WrapperComponent) => {
  return (props) => {
    // console.log('withAuth props', props)
    const token = useSelector((state) => state.user.token)

    if (token || localStorage.getItem('userToken')) {
      return <WrapperComponent />
    } else {
      props.history.push("/login");
      return null;
    }
  }
}
