"use client";

import { useFormStatus } from "react-dom";
import clsx from "clsx";
import {
  TbArrowBigDown,
  TbArrowBigDownFilled,
  TbArrowBigUp,
  TbArrowBigUpFilled,
} from "react-icons/tb";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

export function VoteButtons({ upvote, downvote, votes, existingVote }) {
  const { pending, data, method, action } = useFormStatus();
  const [error, setError] = useState(null);

  // Handle error
  const handleVote = async (voteAction) => {
    try {
      setError(null);
      await voteAction();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <button formAction={() => handleVote(upvote)}>
        {existingVote?.vote === 1 ? (
          <TbArrowBigUpFilled
            size={24}
            className={clsx("hover:text-orange-600", {
              "text-pink-300": existingVote?.vote === 1,
            })}
          />
        ) : (
          <TbArrowBigUp
            size={24}
            className={clsx("hover:text-orange-600", {
              "text-pink-300": existingVote?.vote === 1,
            })}
          />
        )}
      </button>
      <span className="w-6 text-center tabular-nums">
        {pending ? (
          <span className="animate-spin h-6  w-6 flex items-center justify-center">
            <FaSpinner />
          </span>
        ) : (
          votes
        )}
      </span>
      <button formAction={() => handleVote(downvote)}>
        {existingVote?.vote === -1 ? (
          <TbArrowBigDownFilled
            size={24}
            className={clsx("hover:text-blue-600", {
              "text-blue-300": existingVote?.vote === -1,
            })}
          />
        ) : (
          <TbArrowBigDown
            size={24}
            className={clsx("hover:text-blue-600", {
              "text-blue-300": existingVote?.vote === -1,
            })}
          />
        )}
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </>
  );
}
