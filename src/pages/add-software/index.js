import React, { useRef } from "react";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import Gutter from "../../components/StyledComponents/Gutter";
import { Button, Icon } from "semantic-ui-react";
import Main from "../../components/main/Main";
import CustomInput from "../../components/CustomInput";
import AddButton from "../../components/AddButton";
import CustomDropdown from "../../components/dropdown/Dropdown";
import CustomTextArea from "../../components/CustomTextArea";
import AddImage from "../../img-assets/add-image.jpeg";
import AppCards from "../../components/AppsCard";
import SoftwareOptions from "../../components/SoftwareOptions";
import api from "../../api/api";

const AddSoftware = () => {
  const profile_img_ref = useRef();

  const upload_profile_image = async () => {};

  //   const uploadProfile = async (e) => {
  //     setUploading(true);
  //     console.log(e.target.files);
  //     const newFile = e.target.files[0];
  //     console.log(newFile);
  //     let fileObj = new FormData();
  //     fileObj.append("file", newFile);
  //     const fileResponse = await file.addFile(fileObj);
  //     if (fileResponse) {
  //       setUploading(false);
  //       setPic(fileResponse.content);
  //       changePicture(fileResponse.content);
  //     }
  //   };

  const fileOnChange = async (e) => {
    /*Selected files data can be collected here.*/
    console.log(e.target.files);
    console.log(e.target.files);
    const newFile = e.target.files[0];
    let fileObj = new FormData();
    fileObj.append("file", newFile);

    const fileResponse = await api.create("files/upload");
    if (fileResponse) {
      console.log(fileResponse);
    }
  };
  const handleBtnClick = () => {
    /*Collecting node-element and performing click*/
    profile_img_ref.current.click();
  };

  return (
    <>
      <Main>
        <MainDashboardContainer>
          <Gutter>
            <section className="ui grid">
              <div className="row">
                <div className="two wide column">
                  <AddButton
                    click={handleBtnClick}
                    content={"Add Profile Image"}
                    icon={"plus"}
                  />
                  {/* <div onClick={handleBtnClick}>Add BUtton</div> */}
                  <input
                    hidden
                    type="file"
                    ref={profile_img_ref}
                    onChange={fileOnChange}
                  />
                </div>
                <div className="fourteen wide column">
                  <CustomInput placeholder={"Product Name"} />
                  <Gutter top={10} bottom={10}>
                    <CustomDropdown />
                  </Gutter>
                  <Gutter top={10} bottom={10}>
                    <CustomTextArea placeholder={"Overview"} />
                  </Gutter>
                </div>
              </div>
              <div className="sixteen wide column">
                <h3>Videos</h3>
                <AddButton
                  style={{ width: "100%", display: "block" }}
                  icon={"plus"}
                  content={"Add Introductory Video"}
                  height={"15rem"}
                />
              </div>
            </section>
          </Gutter>
          <Gutter>
            <Gutter>
              <h3>Images</h3>
            </Gutter>
            <div className="ui grid">
              <div className="four">
                <AddButton height={"10rem"} />
              </div>

              <div className="four">
                <img
                  src={AddImage}
                  alt=""
                  style={{ height: "10rem", display: "block" }}
                />
              </div>
            </div>
          </Gutter>
          <Gutter>
            <Gutter>
              <h3>Digital Collateral</h3>
            </Gutter>
            <div className="ui grid">
              <div className="four">
                <AddButton height={"7rem"} content={false} />
              </div>
              <div className="four">
                <AppCards content={"Presentation"} />
              </div>
            </div>
          </Gutter>
          <Gutter>
            <SoftwareOptions />
          </Gutter>
          <Gutter>
            <Button basic color="violet">
              <Button.Content>
                <Icon name={"plus"} />
                Add Features
              </Button.Content>
            </Button>
          </Gutter>
          <Gutter>
            <section style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button content="Go Live" primary />
            </section>
          </Gutter>
        </MainDashboardContainer>
      </Main>
    </>
  );
};
export default AddSoftware;
