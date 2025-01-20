import { loadStripe } from "@stripe/stripe-js";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <>
            <Helmet><title>GuildDo - Membership</title></Helmet>
            <Container>
                <section className="pt-8 min-h-screen">
                    <SectionTitle title="Payment"></SectionTitle>

                    <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                    </Elements>
                </section>
            </Container>
        </>
    );
};

export default Payment;