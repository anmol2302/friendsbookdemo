package com.stackroute.friendsBook.resource;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.friendsBook.Exceptions.UserAlreadyExistsException;
import com.stackroute.friendsBook.model.User;
import com.stackroute.friendsBook.service.UserService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;


@RunWith(SpringRunner.class)
@WebMvcTest
public class UserResourceTests {

    @Autowired
    private MockMvc mockMvc;
    private User user;
    @MockBean
    private UserService userService;
    @InjectMocks
    private UserResource userResource;

    private List<User> list = null;

    @Before
    public void setUp() {

        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(userResource).build();
        user = new User();
        user.setAddress("Bangalore");
        user.setContactNo("987654321");
        user.setEmail("a@gmail.com");
        user.setName("a");
        user.setUserProfileImageUrl("\"https://www.google.com/search?q=google+images&client=ubuntu&hs=5bQ&channel=fs&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi27qPnxq3eAhWFto8KHa_FBesQ_AUIDigB&biw=1366&bih=639#imgrc=faVYp-YX1tMUxM:\"");
        list = new ArrayList();

        list.add(user);
    }

    @Test
    public void addUsers() throws Exception, UserAlreadyExistsException {
        when(userService.addUser(any())).thenReturn(user);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/user/addUser")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(user)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());


    }

    @Test
    public void addUsersFailure() throws Exception, UserAlreadyExistsException {
        when(userService.addUser(any())).thenThrow(UserAlreadyExistsException.class);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/user/addUser")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
                .andExpect(MockMvcResultMatchers.status().isConflict())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getAllUsers() throws Exception {
        when(userService.getAll()).thenReturn(list);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/user/getAllUser")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());

    }

    private static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}