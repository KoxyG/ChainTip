// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ChainTip {
    uint256 public newsLength = 0;

    struct News {
        address payable owner;
        string title;
        string description;
        uint256 likes;
        uint256 tips;
    }

    // Mapping for posted news
    mapping(uint256 => News) public postedNews;

    // Mapping to track likers
    mapping(uint256 => mapping(address => bool)) public likers;

    // Event declarations
    event NewsPosted(address indexed owner, uint256 indexed newsId, string title, string description);
    event NewsDeleted(address indexed owner, uint256 indexed newsId);
    event NewsLiked(address indexed liker, uint256 indexed newsId, bool isLiked);
    event NewsTipped(address indexed tipper, uint256 indexed newsId, uint256 amount);

    // Post news
    function postNews(string calldata _title, string calldata _description) external {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");

        postedNews[newsLength] = News(payable(msg.sender), _title, _description, 0, 0);
        emit NewsPosted(msg.sender, newsLength, _title, _description);
        newsLength++;
    }

    // Fetch a news
    function getNews(uint256 _index) external view returns (address payable, string memory, string memory, uint256, uint256) {
        News storage newsItem = postedNews[_index];
        return (newsItem.owner, newsItem.title, newsItem.description, newsItem.likes, newsItem.tips);
    }

    // Delete news
    function deleteNews(uint256 _index) external {
        require(msg.sender == postedNews[_index].owner, "Only news creator can delete news");

        delete postedNews[_index];
        emit NewsDeleted(msg.sender, _index);
    }

    // Get the length of postedNews
    function getNewsLength() external view returns (uint256) {
        return newsLength;
    }

    // Like and dislike news
    function likeAndDislikeNews(uint256 _index) external {
        if (!likers[_index][msg.sender]) {
            likers[_index][msg.sender] = true;
            postedNews[_index].likes++;
            emit NewsLiked(msg.sender, _index, true);
        } else {
            likers[_index][msg.sender] = false;
            postedNews[_index].likes--;
            emit NewsLiked(msg.sender, _index, false);
        }
    }

    // Tip creator
    function tipCreator(uint256 _index) external payable {
        News storage newsItem = postedNews[_index];
        address payable _receiver = newsItem.owner;
        require(msg.value > 0, "Tip amount must be greater than 0");

        (bool sent,) = _receiver.call{value: msg.value}("");
        require(sent, "Failed to send Ether");

        // Increment tips
        newsItem.tips += msg.value;
        emit NewsTipped(msg.sender, _index, msg.value);
    }

    receive() external payable {}

    fallback() external payable {}
}
