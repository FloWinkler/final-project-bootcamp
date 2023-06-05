import { LocationWrapper, LocationContainer, ImgWrapper, CenterNameAndLocationWrapper, CenterNameWrapper, LocationNameWrapper } from "./LocationCompStyles";
import { IoMdPin } from "react-icons/io";

function LocationComp({ onLocationSelected, info }) {

  return (
    <>
      {/* onClick send ID of Location as arguement */}
      <LocationWrapper onClick={onLocationSelected}>
        <LocationContainer>
          <ImgWrapper>
            <img src={info.center_image} alt="vr center" />
          </ImgWrapper>
          <CenterNameAndLocationWrapper>
            <CenterNameWrapper>
              {info.center_name}
            </CenterNameWrapper>
            <LocationNameWrapper>
              <IoMdPin color="var( --highlight-color)" />
              {info.center_city}, {' '}
              {info.center_country}
            </LocationNameWrapper>
          </CenterNameAndLocationWrapper>
        </LocationContainer>
      </LocationWrapper>
    </>
  );
}

export default LocationComp;
