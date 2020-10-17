import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useFetchPosts from './useFetchPosts';
import Heatmap from './Heatmap';
import PostsTable from './PostsTable';
import ViewInModal from './ViewInModal';
import {
  Container, LoadingContainer, LoadingSpinner, ErrorContainer, Modal, CloseModal,
} from './HeatmapSection.style';

function HeatmapSection() {
  const { subreddit } = useParams(); // route param set in App
  const {
    isLoading, hasError, postsPerDay,
  } = useFetchPosts(subreddit);
  const [selectedDayAndHour, setSelectedDayAndHour] = useState({ day: null, hour: null });
  const [shouldModalOpen, setShouldModelOpen] = useState(true);
  const [modalMode, setModalMode] = useState(false);

  let canOpenCell = false;

  const { day, hour } = selectedDayAndHour;
  const selectedPosts = (postsPerDay[day] && postsPerDay[day][hour]) || [];
  canOpenCell = selectedPosts.length > 0;

  useEffect(() => {
    setShouldModelOpen(true);
  }, [selectedDayAndHour]);

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
      </LoadingContainer>
    );
  }

  if (hasError) {
    return (
      <ErrorContainer>
        Something went wrong. Please check the subreddit you entered then try again.
      </ErrorContainer>
    );
  }

  return (
    <>
      <Container as="section">
        <Heatmap
          postsPerDay={postsPerDay}
          selectedDayAndHour={selectedDayAndHour}
          onClickHour={setSelectedDayAndHour}
          // showPostsTable={setPostsTableIsVisible}
        />

        <ViewInModal viewInModalCheck={setModalMode} />

        {
          selectedPosts.length > 0 && !modalMode && (
            <PostsTable posts={selectedPosts} />
          )
          }

        {
        canOpenCell && shouldModalOpen && modalMode && (
          <Modal id="myModal" className="modal">
            <div className="modal-content">
              <CloseModal className="closeModal" onClick={() => setShouldModelOpen(false)}>&times;</CloseModal>
              <PostsTable posts={selectedPosts} />
            </div>
          </Modal>
        )
        }
      </Container>
    </>
  );
}

export default HeatmapSection;
