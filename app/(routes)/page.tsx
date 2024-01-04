import getBillboard from "@/actions/get-billboards";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";

export const revalidate = 0;


const HomePage = async () => {
    const billboard = await getBillboard(`8718b3be-f9c0-430c-815c-3e3bc8f3ca2f`);
    const products = await getProducts({ isFeatured: true });

    return (
        <Container>
            <div className="space-y-10 pb-8">
                <Billboard data={billboard} />

                <div className="flex-flex-col gap-y-8 px:-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;