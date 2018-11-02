package com.stackroute.friendsBook.Notifications;

import com.stackroute.friendsBook.Constants.AlertConstants;
import org.apache.commons.logging.Log;

import java.io.*;
import java.net.HttpURLConnection;
;
import java.net.URL;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class AlertMessages {


    public static boolean sendMessageToUser(String entity, String loginUserContactName, String loginUserContact, String addedFriendUserName, String addedFriendUserContact) {

        for (int i = 0; i < AlertConstants.sendTo2users; i++) {
            try {
                if (i == 0) {
                    sendMessage(prepareMessageToSend(entity, addedFriendUserName), loginUserContact);
                }

                if (i == 1) {

                    sendMessage(prepareMessageToSend(entity, loginUserContactName), addedFriendUserContact);
                }

            } catch (IOException e) {

                if(i==2){
                    return false;
                }
                else{
                    continue;
                }
            }

        }


        return true;
    }


    public static boolean sendMessage(String message, String userContact) throws IOException {

        boolean msgSent = false;
String response="";
        String testedUrl=AlertConstants.messageUrl + AlertConstants.messageSendToWhom + userContact + "&" + AlertConstants.messageSendToUser + message;
        System.out.println("the url is"+testedUrl);
        System.out.println(userContact+" "+message);
        try {
            //URL url = new URL(AlertConstants.messageUrl + AlertConstants.messageSendToWhom + userContact + "&" + AlertConstants.messageSendToUser + message);
            URL url=new URL("http://sms4power.com/api/swsendSingle.asp?username=t1binarydots&password=23122193&sender=BINARY&sendto="+userContact+"&message="+message);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            InputStream in = new BufferedInputStream(conn.getInputStream());
            response = convertStreamToString(in);
            System.out.println("the resposne is"+response);
        } catch (Exception e) {

            return false;
        }
        return true;
    }

    private static String convertStreamToString(InputStream is) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(is));
        StringBuilder sb = new StringBuilder();

        String line;
        try {
            while ((line = reader.readLine()) != null) {
                sb.append(line).append('\n');
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                is.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return sb.toString();
    }



    public static String prepareMessageToSend(String entity, String userToWhomBecameFriends) {


        StringBuilder alertMsg = new StringBuilder();
        alertMsg.append("hello%20");

        if (getDate().contains("AM%20")) {
            alertMsg.append("good%20morning%20");
        } else {
            alertMsg.append("good%20afternoon%20");
        }
        alertMsg.append("you%20became%20" + entity + "%20with%20");
        alertMsg.append(userToWhomBecameFriends);
        return alertMsg.toString();
    }


    public static String getDate() {

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss a");
        LocalDateTime now = LocalDateTime.now();
        return dtf.format(now);
    }
}
