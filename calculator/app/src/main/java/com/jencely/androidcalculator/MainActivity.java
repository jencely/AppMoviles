package com.jencely.androidcalculator;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatEditText;
import androidx.cardview.widget.CardView;

import android.annotation.SuppressLint;
import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import net.objecthunter.exp4j.Expression;
import net.objecthunter.exp4j.ExpressionBuilder;

import java.util.Objects;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    AppCompatEditText resultText;
    CardView funcC;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        resultText = findViewById(R.id.resultText);
        funcC = findViewById(R.id.funcC);

        funcC.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View v) {
                resultText.setText("");
                return false;
            }
        });
    }
    
    @SuppressLint("NonConstantResourceId")
    @Override
    public void onClick(View v) {
        String resText = Objects.requireNonNull(resultText.getText()).toString();

        switch (v.getId()) { // Check the pressed button
            case R.id.num0: case R.id.num1: case R.id.num2: case R.id.num3: case R.id.num4: // Si el numero fue presionado
            case R.id.num5: case R.id.num6: case R.id.num7: case R.id.num8: case R.id.num9:
                String clickedNum = getResources().getResourceEntryName(v.getId()); // Get the pressed button ID to STRING
                resultText.append(clickedNum.substring(clickedNum.length() - 1)); // Add the last character of the ID (the number)
                break;
            case R.id.funcC: // If "C" has been pressed
                if (!resText.isEmpty()) { // Check if the value is not empty
                    resultText.setText(resText.substring(0, resText.length() - 1)); // Delete the last character
                    resultText.setSelection(resText.length() - 1); // Move the cursor back to the end
                }
                break;
            case R.id.funcDecimal: case R.id.funcDivision: case R.id.funcMultiplication:
            case R.id.funcSubtraction: case R.id.funcAddition: // If a signal has been pressed
                String signal = getResources().getString(getSymbol(this, getResources().getResourceEntryName(v.getId()))); // Returns the signal as STRING
                resultText.append(signal); // Add the current signal
                break;
            case R.id.funcEquals: // If equals button has been pressed
                if (!resText.isEmpty()) { // Check if the value is not empty
                    if (!resText.endsWith(".") && !resText.endsWith("+") && !resText.endsWith("-") && !resText.endsWith("*") && !resText.endsWith("/")) {
                        Expression expression = new ExpressionBuilder(resultText.getText().toString()).build(); // Build the math expression
                        resultText.setText(String.valueOf(expression.evaluate())); // Set the result
                    } else { // Show the error message
                        Toast.makeText(this, "Expresion no valida...", Toast.LENGTH_SHORT).show();
                    }
                }
                break;
            default:
                Toast.makeText(this, "En desarrollo...", Toast.LENGTH_SHORT).show();
                break;
        }
    }

    protected int getSymbol(Context context, String viewID) { // Uses the ID to search the signal in R.string
        return getResources().getIdentifier(viewID, "string", context.getPackageName()); // Return the current signal
    }
}