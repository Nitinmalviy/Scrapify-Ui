import SlTab from '@shoelace-style/shoelace/dist/react/tab';
import SlTabGroup from '@shoelace-style/shoelace/dist/react/tab-group';
import SlTabPanel from '@shoelace-style/shoelace/dist/react/tab-panel';
import SellProducts from "./SellProducts";
import SellScrap from "./SellScrap";
import UserProfile from "./UserProfile";

export default function MyProfile() {
    return (
        <>
            <div className='p-4'>
                <SlTabGroup>
                    <SlTab slot="nav" panel="profile">
                        <div className="indicator">
                            <button className="btn">My Profile</button>
                        </div>
                    </SlTab>
                    <SlTab slot="nav" panel="products">
                        <div className="indicator">
                            <button className="btn">My Products</button>
                        </div>
                    </SlTab>
                    <SlTab slot="nav" panel="scrap">
                        <div className="indicator">
                            <button className="btn">My Scrap</button>
                        </div>
                    </SlTab>
                    <SlTab slot="nav" panel="message">
                        <div className="indicator">
                            <span className="indicator-item badge badge-secondary">99+</span>
                            <button className="btn">Message</button>
                        </div>
                    </SlTab>
                    <SlTabPanel name="profile"><UserProfile /></SlTabPanel>
                    <SlTabPanel name="products"><SellScrap /></SlTabPanel>
                    <SlTabPanel name="scrap"><SellProducts /></SlTabPanel>
                    <SlTabPanel name="message"><SellProducts /></SlTabPanel>
                </SlTabGroup>
            </div>
        </>
    );
}
