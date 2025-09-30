import { Suspense } from "react"
import VerifyOtpForm from "./verifyOtpForm"


export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOtpForm/>
    </Suspense>
  )
}
