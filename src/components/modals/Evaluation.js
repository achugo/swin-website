import React, { useRef, useState } from "react";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { appColors } from "../../appTheme/appTheme";
import CustomDropdown from "../dropdown/Dropdown";
import { ReactComponent as Eval } from "../../img-assets/eval.svg";
import { ReactComponent as IconEdit } from "../../img-assets/icon-edit.svg";
import { ReactComponent as Functionality } from "../../img-assets/functionality.svg";
import { ReactComponent as Support } from "../../img-assets/support.svg";
import { ReactComponent as Ux } from "../../img-assets/ux.svg";
import { ReactComponent as Fitness } from "../../img-assets/fitness.svg";
import { ReactComponent as Percent } from "../../img-assets/percent.svg";
import {
  LoaderSpinner,
  WrapInput,
} from "../../pages/auth/register/form/LoginForm";
import api from "../../api/api";
import Select from "../dropdown/Select";
import { useRouteMatch, withRouter } from "react-router-dom";

const Wrapper = styled.div`
  background-color: ${appColors.WHITE};

  .wrap__add {
    margin: 0 auto;
    max-width: 120px;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;

  span {
    font-family: ${appFont.MEDIUM};
    color: #434343;
    font-size: 2rem;
    position: relative;
    bottom: 30px;

    svg {
      max-width: 40px;
      margin-right: 20px;
      position: relative;
      top: 10px;
    }
  }

  svg.edit {
    max-width: 20px;
    position: relative;
    bottom: 10px;
  }
`;

const InputField = styled.input`
  display: block;
  background: rgba(245, 245, 245, 1) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  padding: 1em 4em 1em 1em;
  margin: 0.1em 0;
  font-size: 15px;
  font-family: ${appFont.LIGHTPOPPING};
  outline: none;
  border: none;
  position: relative;

  &::focus {
    outline: none;
    border: none;
  }
  &:placeholder {
    color: rgba(67, 67, 67, 1);
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const Content = styled.div`
  margin-top: 0.7em;
  svg {
    max-width: 25px;
  }
  span {
    position: relative;
    bottom: 7px;
    font-family: ${appFont.LIGHTPOPPING};
    padding-left: 20px;
    font-size: 16px;
  }

  span.support {
    position: relative;
    display: inline-block;
    bottom: 35px;
    left: 20px;
    font-family: ${appFont.LIGHTPOPPING};
    padding-left: 20px;
    font-size: 16px;
  }
`;

const TextField = styled.textarea`
  display: block;
  background: rgba(245, 245, 245, 1) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;

  padding: 1em 4em 1em 1em;
  margin: 0em 0 1.5em 0;
  font-size: 15px;
  font-family: ${appFont.LIGHTPOPPING};
  outline: none;
  border: none;
  position: relative;

  &::focus {
    outline: none;
    border: none;
  }
  &:placeholder {
    color: rgba(67, 67, 67, 1);
    font-family: ${appFont.LIGHTPOPPING};
  }
`;

const AddButton = styled.button`
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #41a0ff83;
  padding: 0.8em 2em;
  border-radius: 5px;
  outline: none;
  color: white;
  border: none;
  float: right;

  &::focus {
    outline: none;
    border: none;
  }
`;

export const BtnAdd = styled.button`
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #41a0ff83;
  padding: 0.8em 2em;
  border-radius: 5px;
  outline: none;
  color: white;
  border: none;
  float: right;

  &::focus {
    outline: none;
    border: none;
  }
`;

const Evaluation = ({ triggerClose, history }) => {
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const match = useRouteMatch();

  const review_product = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      review: review,
      rating: Number(rating),
    };
    const status = await api.create(
      `products/${match.params.id}/review`,
      payload
    );
    console.log("status", status);
    if (status.status) {
      setLoading(false);
      toast.success(status.message);
      history.push("/dashboard/analyze");
      triggerClose();
    } else {
      setLoading(false);
      toast.error(status.message);
    }
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Heading>
        <span>
          <Eval className="attach" />
          Evaluate
        </span>
        <IconEdit className="edit" />
      </Heading>

      <form onSubmit={review_product}>
        <div className="ui two column grid">
          <div className="seven wide column">
            <Content>
              <Functionality />
              <span>Functionality</span>
            </Content>
          </div>
          <div className="nine wide column">
            <WrapInput>
              <InputField
                type="number"
                required
                placeholder="0"
                onChange={(e) => handleRatingChange(e)}
              />
              <Percent style={{ top: "4px" }} />
            </WrapInput>
          </div>
        </div>

        <div className="ui two column grid">
          <div className="seven wide column">
            <Content>
              <Ux />
              <span>User Experience</span>
            </Content>
          </div>
          <div className="nine wide column">
            <WrapInput>
              <InputField type="number" required placeholder="0" />
              <Percent style={{ top: "4px" }} />
            </WrapInput>
          </div>
        </div>
        <div className="ui two column grid">
          <div className="seven wide column">
            <Content>
              <Fitness />
              <span className="fitness">Fitness for Purpose</span>
            </Content>
          </div>
          <div className="nine wide column">
            <WrapInput>
              <InputField type="number" required placeholder="0" />
              <Percent style={{ top: "4px" }} />
            </WrapInput>
          </div>
        </div>

        <div className="ui two column grid">
          <div className="seven wide column">
            <Content>
              <Support />
              <span className="support">Support and Customer Service</span>
            </Content>
          </div>
          <div className="nine wide column">
            <WrapInput>
              <InputField type="number" required placeholder="0" />
              <Percent style={{ top: "4px" }} />
            </WrapInput>
          </div>
        </div>

        <div className="ui grid">
          <div className="sixteen wide column">
            <WrapInput>
              <TextField
                required
                onChange={handleReviewChange}
                placeholder="Leave comment"
              />
            </WrapInput>
          </div>
        </div>
        {loading && <LoaderSpinner />}

        <AddButton>Enter</AddButton>
      </form>
    </Wrapper>
  );
};

export default withRouter(Evaluation);
