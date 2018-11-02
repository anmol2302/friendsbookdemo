package com.stackroute.friendsBook.resource;

import ch.qos.logback.core.pattern.util.RegularEscapeUtil;

import com.stackroute.friendsBook.Constants.AlertConstants;
import com.stackroute.friendsBook.Exceptions.UserAlreadyExistsException;
import com.stackroute.friendsBook.Notifications.AlertMessages;
import com.stackroute.friendsBook.model.User;
import com.stackroute.friendsBook.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import javafx.scene.control.Alert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@Api(value = "friendsBook", description = "operations pertaining to friendsBook")
public class UserResource {

    @Autowired
    UserService userService;

    @ApiOperation(value = "To add a new User")
    @CrossOrigin(origins = "*")
    @PostMapping("/addUser")
    public ResponseEntity<?> addUser(@Valid @RequestBody User user) throws UserAlreadyExistsException {
        try {

            try {
                return new ResponseEntity<User>(userService.addUser(user), HttpStatus.OK);
            } catch (UserAlreadyExistsException e) {

                return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);

            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(AlertConstants.saveErrorMsg, HttpStatus.CONFLICT);
        }
    }

    @ApiOperation(value = "To get a list of all users")
    @CrossOrigin(origins = "*")
    @GetMapping("/getAllUser")
    public ResponseEntity<?> getAllUser() {


        try {


            return new ResponseEntity<List<User>>(userService.getAll(), HttpStatus.OK);


        } catch (Exception e) {


            return new ResponseEntity<String>("not availaible", HttpStatus.CONFLICT);
        }


    }

    @ApiOperation(value = "To add a friend")
    @CrossOrigin(origins = "*")
    @PostMapping("/addFriend/{idPerson1}/{idPerson2}")
    public ResponseEntity<?> addFriend(@Valid @PathVariable("idPerson1") long idPerson1, @PathVariable("idPerson2") long idPerson2) {
        try {

            Object addFriendResponse = userService.addFriend(idPerson1, idPerson2);

            if (addFriendResponse == null) {

                return new ResponseEntity<String>(AlertConstants.userAlreadyFriendErrorMsg, HttpStatus.CONFLICT);
            } else if (addFriendResponse.equals(AlertConstants.noIdFound)) {

                return new ResponseEntity<String>(addFriendResponse.toString(), HttpStatus.NOT_FOUND);
            } else {

                return new ResponseEntity<Object>(addFriendResponse, HttpStatus.OK);
            }

        } catch (Exception e) {

            return new ResponseEntity<String>(false + "", HttpStatus.CONFLICT);
        }


    }

    @ApiOperation(value = "To get user by Id")
    @CrossOrigin(origins = "*")
    @GetMapping("/getById/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") long id) {

        try {

            return new ResponseEntity<User>(userService.getBYId(id), HttpStatus.OK);

        } catch (Exception e) {

            e.printStackTrace();

            return new ResponseEntity<String>(AlertConstants.userNotFound, HttpStatus.NOT_FOUND);
        }


    }


    @ApiOperation(value = "To check if a particular user exists")
    @CrossOrigin(origins = "*")
    @PostMapping("/isUserExists")
    public ResponseEntity<?> vaildateUserLogin(@RequestBody User user) {

        try {
            return new ResponseEntity<User>(userService.valdiateUserEmail(user.getEmail()), HttpStatus.OK);
        } catch (Exception e) {


            return new ResponseEntity<String>(AlertConstants.validationErrorMsg, HttpStatus.NOT_ACCEPTABLE);
        }
    }

    @ApiOperation(value = "To delete all users")
    @CrossOrigin(origins = "*")
    @DeleteMapping("/deleteAllUsers")
    public ResponseEntity<?> deleteAllusers() {


        try {
            return new ResponseEntity<>(userService.deleteAllUsers(), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(AlertConstants.deleteErrorMsg, HttpStatus.EXPECTATION_FAILED);
        }

    }

    @ApiOperation(value = "To display First level friends recommendations")
    @CrossOrigin(origins = "*")
    @GetMapping("/getRecommendations/{level}/{id}")
    public ResponseEntity<?> getFirstLevelRecommendations(@PathVariable("level") int level, @PathVariable("id") long id) {

        try {

            if (level == 1) {

                return new ResponseEntity<List<User>>(userService.getFirstLevelRecommendation(id), HttpStatus.OK);
            } else if (level == 2) {
                return new ResponseEntity<List<User>>(userService.getSecondeLevelRecommendation(id), HttpStatus.OK);


            } else {


                return new ResponseEntity<String>(AlertConstants.recommendationAlert, HttpStatus.CONFLICT);
            }
        } catch (Exception e) {


            return new ResponseEntity<Boolean>(false, HttpStatus.CONFLICT);
        }

    }

    @ApiOperation(value = "To display second level friends recommendations")
    @CrossOrigin(origins = "*")
    @GetMapping("/getUserFriendById/{userId}")
    public ResponseEntity<?> getUserFriendBYId(@PathVariable("userId") long userId) {

        try {
            return new ResponseEntity<>(userService.getUserFriendById(userId), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<String>(AlertConstants.userNotFound + userId, HttpStatus.NOT_FOUND);
        }
    }
}